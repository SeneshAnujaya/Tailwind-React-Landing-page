import {offer} from '../assets/images';
import Button from '../components/Button';
import {arrowRight} from '../assets/icons';

const SpecialOffer = () => {
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1">
                <img src={offer} width={773} height={687} className="object-contain w-full"/>
            </div>
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    <span className="text-coral-red">Special </span>
                   offer
                </h2>
                <p className="mt-6 lg:max-w-lg info-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, explicabo? Nemo deserunt ipsa amet pariatur nesciunt expedita, eos quos optio! Repellendus nobis nulla recusandae doloremque dolores soluta repudiandae, labore doloribus.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque illum odit omnis repellat, ut odio et possimus provident, rem veniam laboriosam </p>

                <div className="mt-11 flex flex-wrap gap-4">
                <Button label="Shop Now" icon={arrowRight}/>
                <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
                </div>
                </div>
        </section>

    )
}

export default SpecialOffer;