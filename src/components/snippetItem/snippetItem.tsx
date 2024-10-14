import router from '@/router'
import './index.scss'
import MyIcon from '../My-Icon.vue'
type SnippetItemData = {
  tag: string[]
  title: string
  subtitle: string
  time: string
  year: string
  id: string
}
type Props = {
  data: SnippetItemData
}
function SnippetItem(props: Props) {
  const year = props.data.year
  const time = props.data.time
  const date = year + '-' + time

  function gotoDetails() {
    router.push({
      path: '/snippet-details',
      query: {
        id: props.data.id
      }
    })
  }

  return (
    <div onClick={gotoDetails} class="snippet-item">
      <div class="tag-list">
        {props.data.tag.map((tag) => (
          <span class="tag" title={tag}>
            <MyIcon width="18px" icon={tag}></MyIcon>
          </span>
        ))}
      </div>
      <div class="title">
        <p>{props.data.title}</p>
      </div>
      <div class="subtitle">
        <p>{props.data.subtitle}</p>
      </div>
      <div class="time">
        <v-icon icon="mdi-calendar-month-outline" /> {date}
      </div>
    </div>
  )
}

export default SnippetItem
