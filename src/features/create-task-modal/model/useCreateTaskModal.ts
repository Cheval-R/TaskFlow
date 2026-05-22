import { useState } from 'react'

export function useCreateTaskModal() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const toggleCreateTaskModal = () => {
    setIsCreateModalOpen((prevState) => !prevState)
  }
  const openCreateTaskModal = () => {
    setIsCreateModalOpen(true)
  }
  const closeCreateTaskModal = () => {
    setIsCreateModalOpen(false)
  }
  return {
    toggleCreateTaskModal,
    openCreateTaskModal,
    closeCreateTaskModal,
    isCreateModalOpen,
  }
}
