'use client'

import {useState, useEffect} from 'react'
import {Dialog, DialogPanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/24/outline'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'


const testimonials = [
    {
        quote: "“TokenPay has truly revolutionized how I manage my digital assets. The transaction speed, coupled with their advanced security measures, gives me full confidence every time I use the platform. ”",
        name: "Judith Black",
        title: "CEO of Workcation",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        quote: "“Been using TokenPay for a few months now, and honestly, it’s been super smooth. No random freezes or hidden fees. Everything just works. If you’re into crypto and want something reliable, TokenPay’s where it’s at!”",
        name: "Alex Johnson",
        title: "CTO of InnovateX",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        quote: "“TokenPay offers solid transaction speeds and security, which I appreciate. However, I’d love to see a few more integration options with popular wallets. Overall, it's a reliable platform that's clearly improving over time.”",
        name: "Maria Lopez",
        title: "Founder of Creativo",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
];
const features2 = [
    {
        name: 'Generate new token',
        description:
            'Sign up in seconds and receive your personal TokenPay token — your key to fast, secure, and seamless payments across all supported platforms.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Check your balance',
        description: 'Easily view your token balance anytime. Stay in control of your funds and keep track of every transaction with just a few clicks.',
        icon: LockClosedIcon,
    },
    {
        name: 'Configure your card anytime',
        description: 'Update your payment preferences and link a new card whenever you need. TokenPay gives you full flexibility to manage your cards on your terms.',
        icon: ServerIcon,
    },
]
const navigation = [

    { name: 'Benefits', href: '#' },
    { name: 'Admin dashboard', href: '#' },
    { name: 'Reviews', href: '#' },
]
const features = [
    {
        name: 'Admin dashboard',
        description:
            'Manage users, monitor transactions, and control token settings — all from a clean, intuitive admin interface. Track performance in real-time and make updates.'
            ,
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Security',
        description:
        'Each payment uses a unique, auto-expiring token valid for only 15 minutes — preventing reuse, hijacking, or delayed attempts. It adds an extra layer of security for every transaction.',
        icon: LockClosedIcon,
    },
    {
        name: 'Frequent updates',
        description:
'TokenPay evolves with your needs — regular updates bring new features, performance enhancements, and security patches to keep everything running smoothly and safely.',        icon: ArrowPathIcon,
    },
    {
        name: 'Authentication options',
        description:
            'Let users Admin Dashboard or pay using their TokenPay credentials. Whether it’s one-click access or seamless checkout, TokenPay simplifies both identity and transaction flows.',
        icon: FingerPrintIcon,
    },
]

export default function Example() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [index, setIndex] = useState(0);
    const [agreed, setAgreed] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const { quote, name, title, avatar } = testimonials[index];

    return (
        <>
            <div className="bg-white">
                <header className="absolute inset-x-10 top-0 z-50">
                    <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <h1 className="text-black text-4xl font-bold tracking-tight ">TokenPay</h1>
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
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="/admin" className="text-sm/6 font-semibold text-gray-900">
                                To Dashboard <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </nav>
                    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                        <div className="fixed inset-0 z-50"/>
                        <DialogPanel
                            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <h1 className="text-black text-4xl font-bold tracking-tight">TokenPay</h1>
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
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        <a
                                            href="/admin"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            To Dashboard
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </Dialog>
                </header>

                <div className="relative isolate px-10 pt-lg:px-10">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                    <div className="mx-auto max-w-3xl pt-55 sm:pt-62 lg:py-12О">

                        <div className="text-center">
                            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                                The newest encrypted payment system in Bulgaria
                            </h1>
                            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                                TokenPay is a secure and flexible payment system that uses digital tokens for fast,
                                easy,
                                and reliable transactions. Perfect for platforms, apps, or services that need a smooth
                                way
                                to manage and accept token-based payments.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="/admin"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                                <a href="#" className="text-sm/3 font-semibold text-gray-900">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


            <div className="bg-white pt-24 sm:pt-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-lg/8 font-semibold text-gray-900">
                        Trusted by the world’s leading corporations
                    </h2>
                    <div
                        className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-10 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <img
                            alt="Amazon"
                            src="https://dhjhkxawhe8q4.cloudfront.net/thomasnelson-wp/wp-content/uploads/sites/5/2024/07/15154418/amazon-logo-black-transparent-1.png"
                            width={158}
                            height={48}
                            className="col-span-1 max-h-12 w-full object-contain"
                        />
                        <img
                            alt="eBay"
                            src="/ebay-logo-black-transparent.png"
                            width={158}
                            height={48}
                            className="col-span-1 max-h-12 w-full object-contain"
                        />
                        <img
                            alt="Walmart"
                            src="/wizz-air-logo-black-and-white.png"
                            width={158}
                            height={48}
                            className="col-span-1 max-h-12 w-full object-contain"
                        />
                    </div>

                </div>
            </div>


            <div className="bg-white py-24 sm:py-32  ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl lg:text-center">
                        <h2 className="text-base/7 font-semibold text-indigo-600">Pay safe</h2>
                        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                            Why TokenPay?
                        </p>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            TokenPay simplifies digital payments by using tokens instead of traditional currency.
                            Whether you're managing in-app purchases, subscription systems, or custom rewards, TokenPay
                            gives you full control with fast, secure, and scalable transactions. No banks, no
                            delays — just seamless token-based payments tailored to your platform.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base/7 font-semibold text-gray-900">
                                        <div
                                            className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                                            <feature.icon aria-hidden="true" className="size-6 text-white"/>
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4 lg:pr-8">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base/7 font-semibold text-indigo-600">Pay easy</h2>
                                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                    Admin dashboard
                                </p>
                                <p className="mt-6 text-lg/8 text-gray-600">
                                    Manage users, monitor transactions, and control token settings — all from a clean,
                                    intuitive admin interface. Track performance in real-time and make updates.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                    {features2.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon aria-hidden="true"
                                                              className="absolute top-1 left-1 size-5 text-indigo-600"/>
                                                {feature.name}
                                            </dt>
                                            {' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <img
                            alt="Product screenshot"
                            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                            width={2432}
                            height={1442}
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        />
                    </div>
                </div>
            </div>

            <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div
                    className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"/>
                <div
                    className="absolute inset-y-0 right-1/2 -z-10 mr-18 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"/>

                <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
                    <img
                        alt="Logo"
                        src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
                        className="mx-auto h-12"
                    />
                    <figure className="mt-10 transition-opacity duration-1000 ease-in-out">
                        <blockquote className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            <p>{quote}</p>
                        </blockquote>
                        <figcaption className="mt-10">
                            <img
                                alt=""
                                src={avatar}
                                className="mx-auto size-10 rounded-full"
                            />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div className="font-semibold text-gray-900">{name}</div>
                                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true"
                                     className="fill-gray-900">
                                    <circle r={1} cx={1} cy={1}/>
                                </svg>
                                <div className="text-gray-600">{title}</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>

            <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="text-4xl font-semibold tracking-tight text-white">TokenPay</h2>
                            <p className="mt-4 text-lg text-gray-300">
                                TokenPay is a secure and flexible payment system that uses digital tokens for fast,
                                easy,
                                and reliable transactions. Perfect for platforms, apps, or services that need a smooth
                                way
                                to manage and accept token-based payments.
                            </p>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <CalendarDaysIcon aria-hidden="true" className="size-6 text-white"/>
                                </div>
                                <dt className="mt-4 text-base font-semibold text-white">Realtime security updates</dt>
                                <dd className="mt-2 text-base/7 text-gray-400">
                                    Stay protected with instant security updates. TokenPay continuously monitors and adjusts defenses to safeguard your transactions and data against evolving threats.

                                </dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <HandRaisedIcon aria-hidden="true" className="size-6 text-white"/>
                                </div>
                                <dt className="mt-4 text-base font-semibold text-white">Sessions and security</dt>
                                <dd className="mt-2 text-base/7 text-gray-400">
                                    TokenPay ensures your sessions are secure with automatic timeouts, encrypted communication, and protection against unauthorized access.


                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    />
                </div>
            </div>

            </>

            )
            }
