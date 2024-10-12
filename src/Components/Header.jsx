import logoImg from '../Assets/logoImg.jpg';

export default function Header(){
    return(
    <header className  = "flex flex-col gap-4 items-center">
        <img src={logoImg} alt='Quiz logo' className="object-cover w-1/4 h-1/8 rounded-sm "/>
        <h1 className="uppercase font-extrabold font-sans text-stone-500">React Quiz</h1>
    </header>)
}