import ss from './Tags.module.scss'
import SidebarItem from '../../../../shared/ui/SidebarItem'
import TagsIcon from '../TagsIcon'
import plusIcon from '@/assets/icons/plus.svg'
import NavigationIcon from '../../../workspace-navigation/ui/NavigationIcon'

interface Props {
  tags: {
    label: string
    count: number
    color: string
  }[]
}

export const Tags = ({ tags }: Props) => {
  return (
    <div className={ss.tags}>
      <ul className={ss.list}>
        <li className="item">
          <SidebarItem
            label={'Work'}
            count={3}
            active={false}
            onClick={() => console.log('click')}
            size={'small'}
            icon={<TagsIcon color={'blue'} />}
          />
        </li>
        <li className="item">
          <SidebarItem
            label={'Personal'}
            count={3}
            active={false}
            onClick={() => console.log('click')}
            size={'small'}
            icon={<TagsIcon color={'green'} />}
          />
        </li>
        <li className="item">
          <SidebarItem
            label={'Work'}
            count={3}
            active={false}
            onClick={() => console.log('click')}
            size={'small'}
            icon={<TagsIcon color={'yellow'} />}
          />
        </li>
        <li className="item">
          <SidebarItem
            label={'Work'}
            count={3}
            active={false}
            onClick={() => console.log('click')}
            size={'small'}
            icon={<TagsIcon color={'blue'} />}
          />
        </li>
        <li className="item">
          <SidebarItem
            label={'Work'}
            count={3}
            active={false}
            onClick={() => console.log('click')}
            size={'small'}
            icon={<TagsIcon color={'green'} />}
          />
        </li>
      </ul>
      <SidebarItem
        icon={
          <NavigationIcon alt={''} src={plusIcon} width={'20'} height={'20'} />
        }
        label={'Add Tag'}
        onClick={() => console.log('click')}
      />
    </div>
  )
}
