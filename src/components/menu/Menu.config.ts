import NavigationTypes from '@customTypes/navigation'

const menuConfig = {
  sections: [
    {
      label: 'menu.about',
      section: NavigationTypes.Section.ABOUT,
      position: NavigationTypes.Location.TOP,
      color: '#e5dcc5',
    },
    {
      label: 'menu.education',
      section: NavigationTypes.Section.EDUCATION,
      position: NavigationTypes.Location.RIGHT,
      color: '#848fa5',
    },
    {
      label: 'menu.skills',
      section: NavigationTypes.Section.SKILLS,
      position: NavigationTypes.Location.BOTTOM,
      color: '#11151c',
    },
    {
      label: 'menu.work',
      section: NavigationTypes.Section.WORK,
      position: NavigationTypes.Location.LEFT,
      color: '#d0ddd7',
    },
  ],
}

export default menuConfig
