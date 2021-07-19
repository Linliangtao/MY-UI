import { defineComponent } from 'vue'

const avatarProps = { src: String } as const

export default defineComponent({
  name: 'avatar',
  props: avatarProps,
  render() {
    const { src } = this
    return (  
      <span>
        <img src={src} />
      </span>
    )
  }
})
