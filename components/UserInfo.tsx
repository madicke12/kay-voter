import Image from 'next/image';



interface UserInfoProps {
    imgSrc: string;
    name: string;
    email: string;
    alt: string;
}



const UserInfo: React.FC<UserInfoProps> = ({ imgSrc, name, email, alt }) => (
    <div className="flex gap-3">
        <Image width={50} height={50} loading="lazy" src={imgSrc} alt={alt} className="shrink-0 w-9 aspect-square" />
        <div className="flex flex-col self-start">
            <div className="text-sm font-medium leading-5 text-zinc-900">{name}</div>
            <div className="mt-2 text-xs leading-5 text-zinc-400">{email}</div>
        </div>
    </div>
);

export default UserInfo;