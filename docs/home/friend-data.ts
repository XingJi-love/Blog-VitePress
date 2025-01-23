import type { NavData } from '../.vitepress/theme/untils/types'
import FRIEND_DATA_ITEMS from './friend-data.json'

export const FRIEND_DATA: NavData = {
  title: '🔗 友情链接',
  items: FRIEND_DATA_ITEMS.sort(() => Math.random() - 0.5),
}
