type Tag = {
  label: string
  value: string
  color: string
  taskCount: number
}
const tags: Tag[] = [
  { label: 'Work', value: 'Work', color: '#306DEB', taskCount: 1 },
  { label: 'Personal', value: 'Personal', color: '#60B462', taskCount: 3 },
  { label: 'Business', value: 'Business', color: '#9771e8', taskCount: 2 },
  { label: 'Health', value: 'Health', color: '#ed995a', taskCount: 5 },
  { label: 'Study', value: 'Study', color: '#f1ca51', taskCount: 7 },
]

export default tags
