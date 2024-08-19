import { ReactElement } from 'react'

const workConfig: {
  startDate: string
  finishDate: string | null
  companyName: string
  companyLocation: string
  descriptions: {
    description: string
    descriptionLinks?: ReactElement[]
    name?: string
    link?: string
  }[]
}[] = [
  {
    startDate: '2023-03',
    finishDate: null,
    companyName: 'work.myack.name',
    companyLocation: 'work.myack.location',
    descriptions: [
      {
        name: 'work.myack.ziphy.name',
        link: 'https://ziphycare.com/',
        description: 'work.myack.ziphy.description',
      },
      {
        name: 'work.myack.labq.name',
        link: 'https://labq.com/',
        description: 'work.myack.labq.description',
      },
    ],
  },
  {
    startDate: '2022-10',
    finishDate: '2023-03',
    companyName: 'work.welbex.name',
    companyLocation: 'work.welbex.location',
    descriptions: [
      {
        name: 'work.welbex.amocrm.name',
        link: 'https://labq.com/',
        description: 'work.welbex.amocrm.description',
      },
    ],
  },
  {
    startDate: '2022-02',
    finishDate: '2023-04',
    companyName: 'work.proxyone.name',
    companyLocation: 'work.proxyone.location',
    descriptions: [{ description: 'work.proxyone.description' }],
  },
]

export default workConfig
