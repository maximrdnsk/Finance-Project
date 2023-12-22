import {IconWallet, IconDashboard, IconBudget, IconGoals, IconAnalytics, IconSettings} from "./icons"

const sidebarItems = [
    {id: 1,
    title: "Dashboard",
    icon: <IconDashboard/>,
    link: "/dashboard"},
    {id: 2,
    title: "Expenses",
    icon: <IconWallet/>,
    link: "/expenses"},
    {id: 3,
    title: "Income",
    icon: <IconBudget/>,
    link: "/income"},
    {id: 4,
    title: "Goals",
    icon: <IconGoals/>,
    link: "/goals"},
    {id: 5,
    title: "Analytics",
    icon: <IconAnalytics/>,
    link: "/analytics"},
    {id: 6,
    title: "Settings",
    icon: <IconSettings/>,
    link: "/settings"},
]

export {sidebarItems};