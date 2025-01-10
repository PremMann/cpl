



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin, faTelegram, faTiktok } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
    const socials = [
        {
            name: 'Facebook',
            icon: faFacebook,
            url: 'https://www.facebook.com/'
        },
        {
            name: 'Twitter',
            icon: faTwitter,
            url: 'https://twitter.com/'
        },
        {
            name: 'Instagram',
            icon: faInstagram,
            url: 'https://www.instagram.com/'
        },
        {
            name: 'Youtube',
            icon: faYoutube,
            url: 'https://www.youtube.com/'
        },
        {
            name: 'Linkedin',
            icon: faLinkedin,
            url: 'https://www.linkedin.com/'
        },
        {
            name: 'Tiktok',
            icon: faTiktok,
            url: 'https://www.tiktok.com/'
        }
    ];
    return (
        <footer className="mt-auto border-t flex flex-row w-full bg-[#313a47]">
            <div className='w-full'>
                <small className="text-center block py-5 text-sm text-gray-500">© 2024 CPL. Recreate.</small>
            </div>

            <div className='w-full flex flex-row gap-1 items-center justify-center'>
                {socials.map((social, index) => (
                    <div className="flex justify-center gap-3 group relative w-fit rounded-full" key={index}>
                     <div className="group ease-in-out duration-400 -translate-y-4 pointer-events-none transition-all group-hover:-translate-y-10 dark:bg-slate-700 absolute left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2">
                         <span className="absolute group-hover:flex hidden bg-[#e65101] border border-[#e65101] dark:border-slate-700 font-mono text-sm rounded-md p-1 text-white dark:bg-slate-700">
                             <div className="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 z-50"></div>
                                {social.name}
                         </span>
                     </div>
                     <FontAwesomeIcon className="w-4 h-4 border border-[#e0e0e0] bg-white hover:border-[#e65101] hover:bg-[#e65101] dark:hover:border-slate-700 dark:hover:bg-slate-700 shadow-xl hover:text-white p-2.5 rounded-full cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 duration-30" icon={social.icon} />
                 </div>
                ))}
            </div>
        </footer>
    );
}