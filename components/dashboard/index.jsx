import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Modal from '../modal'
import Description from '../description'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {

    const [openmodal, setopenmodal] = useState(false)


    const controlmodal = () => {
        setopenmodal(!openmodal)
    }






    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full">
                <header className="bg-white shadow">
                    <div className="flex mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                        <div className="flex px-4  py-1 text-2xl sm:px-6 lg:px-8 text-red-700 font-bold cursor-pointer" onClick={() => { controlmodal() }}>
                            X
                        </div>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        {/* Replace with your content */}
                        <div className="px-4 py-6 sm:px-0">
                            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
                                <Description />
                                <Modal opencontroler={openmodal} />
                            </div>
                        </div>
                        {/* /End replace */}
                    </div>
                </main>
            </div>
        </>
    )
}
