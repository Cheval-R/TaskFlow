import Task from '../../entities/task/ui/Task';
import ss from './Day.module.scss';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTasks } from '@/entities/task/model/useTasks.ts';
import getStyleTokens from '@/shared/libs/getStyleTokens.ts';
import getTasksLayout from '@/entities/task/model/getTasksLayout.ts';
import {
  convertMinutesToDayjs,
  convertPixelsToMinutes,
} from '@/shared/model/timeConvert.ts';
import { useTags } from '@/entities/tag/model/useTags.ts';
import { useWorkspace } from '@/entities/workspace/model/useWorkspace.ts';
import TaskSidebar from '../../features/task-details/ui/TaskDetailsMenu';
import { useCreateTaskModal } from '@/features/create-task-modal/model/useCreateTaskModal.ts';
import { useTaskDetails } from '@/features/task-details/model/context/useTaskDetails.ts';

export const Day = () => {
  const { date } = useWorkspace();
  const {
    tasks,
    actions: { deleteTask },
  } = useTasks();
  const { activeTags } = useTags();
  const { halfSize } = getStyleTokens();
  const workspaceRef = useRef<HTMLDivElement>(null);
  const [workspaceWidth, setWorkspaceWidth] = useState<number>(0);

  const { isCreateModalOpen, openCreateTaskModal, closeCreateTaskModal } =
    useCreateTaskModal();
  const { openTaskDetails, closeTaskDetails, selectedTaskID } =
    useTaskDetails();

  useEffect(() => {
    const workspaceElement = workspaceRef.current;
    if (!workspaceElement) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setWorkspaceWidth(entry.contentRect.width);
      }
    });
    observer.observe(workspaceElement);
    setWorkspaceWidth(workspaceElement.clientWidth);

    return () => {
      if (workspaceElement) observer.unobserve(workspaceElement);
    };
  }, []);

  function taskClickHandler(id: string) {
    if (id === selectedTaskID) {
      closeTaskDetails();
    } else {
      openTaskDetails(id);
    }
  }

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (task.date.isSame(date, 'day')) {
        if (!activeTags || !activeTags.length) return true;
        if (activeTags.includes(task.tagValue)) return true;
      }
      return false;
    });
  }, [tasks, date, activeTags]);

  const tasksWithLayout = useMemo(() => {
    if (workspaceWidth === 0) return [];
    return getTasksLayout(filteredTasks, workspaceWidth);
  }, [filteredTasks, workspaceWidth, activeTags]);
  return (
    <>
      <div
        ref={workspaceRef}
        className={ss.dayWorkspace}
        onClick={(e) => {
          const target = e.target;
          if (!(target instanceof Element)) return;

          if (
            target.closest('[data-time-zone]') &&
            isCreateModalOpen &&
            !target.closest('#createTaskForm')
          ) {
            closeCreateTaskModal();
          }
        }}
        onDoubleClick={(e) => {
          if (e.target === workspaceRef.current) {
            const startCoordinate =
              Math.floor(e.nativeEvent.offsetY / halfSize) * halfSize;
            const timeStart = convertMinutesToDayjs(
              convertPixelsToMinutes(startCoordinate),
            );

            openCreateTaskModal({
              date: date,
              timeRange: [timeStart, timeStart.add(30, 'minutes')],
            });
          }
        }}
      >
        {tasksWithLayout.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onClick={taskClickHandler}
            />
          );
        })}
      </div>
    </>
  );
};
