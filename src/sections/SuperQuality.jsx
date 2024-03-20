import Button from '../components/Button';
import {shoe8} from '../assets/images';

const SuperQuality = () => {
    return (
        <section id="about-us" className="flex justify-between items-center max-lg:col gap-10 w-full max-container">
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">We Provide 
                    <span className="text-coral-red">Super quality </span>
                    Shoes
                </h2>
                <p className="mt-6 lg:max-w-lg info-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, explicabo? Nemo deserunt ipsa amet pariatur nesciunt expedita, eos quos optio! Repellendus nobis nulla recusandae doloremque dolores soluta repudiandae, labore doloribus.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>

                <div className="mt-11">
                <Button label="View details"/>
                </div>
                </div>

                <div className='flex-1 flex justify-center items-center'>
                    <img src={shoe8} alt="shoe8" width={570} height={522} className='object-contain'/>
                </div>
        </section>
    )
}

export default SuperQuality;