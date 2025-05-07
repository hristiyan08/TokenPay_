'use client'

import { useState, useRef, useEffect } from 'react'

import generateToken from "@/app/admin/generate-token/generateToken";
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'



export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [haveCard, setHaveCard] = useState(false);
    const [isTokenGenerated, setIsTokenGenerated] = useState(false)
    const timerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
            const cardStatus = localStorage.getItem('haveCard');
            if (cardStatus === 'true') {
                setHaveCard(true);
            }
        }, []

    );
    const name = localStorage.getItem('cardName');
    const num = localStorage.getItem('cardNumber');
    const valid = localStorage.getItem('validThru');

    const openCardWindow = () => {
        const newWindow = window.open(
            'admin/add-card',
            'AddCardWindow',
            'width=500,height=700,resizable=no'
        )
        if (newWindow) {
            newWindow.focus()
        }
    }
    return (
        <>

            <header className="bg-gray-50">

                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

                    <div className="flex lg:flex-1">
                        <a onClick={()=>window.location.reload()} className="-m-1.5 cursor-pointer p-1.5">
                            <span className="sr-only">Your Company</span>
                            <h1 className="text-black text-2xl font-bold tracking-tight ">TokenPay Dashboard</h1>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>




                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm/6 font-semibold text-gray-900">
                            Account Details <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-10"/>
                    <DialogPanel
                        className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a onClick={() => window.location.reload()} className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <h1 className="text-black text-2xl font-bold tracking-tight ">TokenPay Dashboard</h1>
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6"/>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">

                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Account Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
            <div className="bg-gray-50 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">

                    <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-bold tracking-tight text-balance text-gray-950 sm:text-5xl">
                        Welcome to TokenPay Dashboard!
                    </p>
                    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                            <div
                                className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        Your bank card
                                    </p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        In this section, you can view the bank card you have added to our system.
                                    </p>
                                </div>
                                <div className="text-center mt-5">
                                    <button

                                        type="button"
                                        className={`w-40 text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none focus:ring-4
          ${haveCard
                                            ? 'bg-gray-500 dark:bg-gray-600 cursor-not-allowed'
                                            : 'bg-blue-700 hover:bg-blue-800 cursor-pointer focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'}`}
                                        onClick={openCardWindow}
                                        disabled={haveCard}
                                    >
                                        Add bank card
                                    </button>
                                </div>

                                <div
                                    className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                    <div
                                        className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                        <h1 className="text-center my-10 text-white text-2xl font-stretch-ultra-condensed">My bank card</h1>
                                        {haveCard ?
                                            <div
                                                className="lg:w-70 md:w-70 sm:w-80 h-60  m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-105">

                                                <img className="relative object-cover w-full h-full rounded-xl"
                                                     src="https://i.imgur.com/kGkSg1v.png"/>

                                                <div className="w-full px-8 absolute top-8">
                                                    <div className="flex justify-between">
                                                        <div className="">
                                                            <p className="font-light">
                                                                Name
                                                            </p>
                                                            <p className="font-medium tracking-widest">
                                                                {name}
                                                            </p>
                                                        </div>
                                                        <img className="w-14 h-14"
                                                             src="https://i.imgur.com/bbPHJVe.png"/>
                                                    </div>
                                                    <div className="pt-1">
                                                        <p className="font-light">
                                                            Card Number
                                                        </p>
                                                        <p className="font-medium tracking-more-wider">
                                                            {num}
                                                        </p>
                                                    </div>
                                                    <div className="pt-6 pr-6">
                                                        <div className="flex justify-between">

                                                            <div className="">
                                                                <p className="font-light text-xs text-xs">
                                                                    Expiry
                                                                </p>
                                                                <p className="font-medium tracking-wider text-sm">
                                                                    {valid}
                                                                </p>
                                                            </div>

                                                            <div className="">
                                                                <p className="font-light text-xs">
                                                                    CVV
                                                                </p>
                                                                <p className="font-bold tracking-more-wider text-sm">
                                                                    ...
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                            :
                                            <>
                                                <div
                                                    className=" grayscale-90  lg:w-70 md:w-70 sm:w-80 h-60  m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-105">

                                                    <img className="relative object-cover w-full h-full rounded-xl"
                                                         src="https://i.imgur.com/kGkSg1v.png"/>

                                                    <div className="w-full px-8 absolute top-8">
                                                        <div className="flex justify-between">
                                                            <div className="">
                                                                <p className="font-light">
                                                                    Name
                                                                </p>
                                                                <p className="font-medium tracking-widest">
                                                                </p>
                                                            </div>
                                                            <img className="w-14 h-14"
                                                                 src="https://i.imgur.com/bbPHJVe.png"/>
                                                        </div>
                                                        <div className="pt-1">
                                                            <p className="font-light">
                                                                Card Number
                                                            </p>
                                                            <p className="font-medium tracking-more-wider">

                                                            </p>
                                                        </div>
                                                        <div className="pt-6 pr-6">
                                                            <div className="flex justify-between">

                                                                <div className="">
                                                                    <p className="font-light text-xs text-xs">
                                                                        Expiry
                                                                    </p>
                                                                    <p className="font-medium tracking-wider text-sm">

                                                                    </p>
                                                                </div>

                                                                <div className="">
                                                                    <p className="font-light text-xs">
                                                                        CVV
                                                                    </p>
                                                                    <p className="font-bold tracking-more-wider text-sm">

                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                                <h1 className="text-center my-5 text-white ">You haven't registered a bank card yet</h1>
                                            </>
                                        }
                                    </div>

                                </div>
                            </div>
                            <div
                                className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-[2rem]">


                            </div>
                        </div>
                        <div className="relative max-lg:row-start-1">
                            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                            <div
                                className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Generate a new payment token</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Click the button to generate a new 15 minutes valid payment token.
                                    </p>
                                </div>
                                <div
                                    className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                    {!isTokenGenerated ? <button
                                            type="button"
                                            className={`w-40 text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none focus:ring-4
          ${haveCard
                                                ? 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                                : 'bg-gray-500 dark:bg-gray-600 cursor-not-allowed'}`}
                                            onClick={() => generateToken(setIsTokenGenerated, timerRef)}
                                            disabled={!haveCard}
                                        >
                                            Generate a new token
                                        </button> :
                                        <div className="flex flex-col justify-center text-center gap-5">
                                            <h1 ref={timerRef} className="text-indigo-600 text-xl font-bold" id="timer">15:00</h1>
                                            <input
                                                id="token"
                                                name="token"
                                                type="text"
                                                required
                                                autoComplete="email"
                                                className=" block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                value="3e2shffdgiihesfpjsifdknxfgkghiosfghiouq7)4adtsdfgjosfdgjodfnfikdsfjojdgfsojgfdojdgojdgogfjo"
                                                readOnly
                                            />

                                            <button
                                                type="button"
                                                className={`w-50 text-white text-center  font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none focus:ring-4
          ${haveCard
                                                    ? 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                                    : 'bg-gray-500 dark:bg-gray-600 cursor-not-allowed'}`}

                                                disabled={!haveCard}
                                            >
                                                Copy
                                            </button>
                                        </div>

                                    }

                                </div>
                            </div>
                            <div
                                className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                        </div>
                        <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                            <div className="absolute inset-px rounded-lg bg-white"></div>
                            <div
                                className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Balance</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Here you can check the balance of your bank card.
                                    </p>
                                </div>
                                <div className="@container  max-lg:py-6 lg:pb-2">
                                    <h1 className="text-center my-20 font-bold text-3xl">125.83 BGN</h1>
                                </div>
                            </div>
                            <div
                                className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
                        </div>
                        <div className="relative lg:row-span-2">
                            <div
                                className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                            <div
                                className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        Your transactions
                                    </p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Here you can view the history of your transactions.
                                    </p>
                                </div>
                                <div className="relative min-h-[30rem] w-full grow">
                                    <div
                                        className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                        <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                            <div className="-mb-px flex text-sm/6 font-medium text-gray-400">

                                                <div className="border-r border-gray-600/10 px-4 py-2">Transactions</div>
                                            </div>
                                        </div>
                                        <div className="px-6 pt-6 pb-14 text-white"></div>

                                    </div>
                                </div>
                            </div>
                            <div
                                className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
