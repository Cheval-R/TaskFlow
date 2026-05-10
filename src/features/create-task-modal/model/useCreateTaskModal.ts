import { useState } from 'react'

export function useCreateTaskModal() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCreateTaskModal = () => {
    setIsOpen((prevState) => !prevState)
  }
  const openCreateTaskModal = () => {
    setIsOpen(true)
  }
  const closeCreateTaskModal = () => {
    setIsOpen(false)
  }
  return {
    toggleCreateTaskModal,
    openCreateTaskModal,
    closeCreateTaskModal,
    isOpen,
  }
}
