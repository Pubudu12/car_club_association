import Image from "next/image"

const PlaceHolder = {

    image: {
        cover: (text, className) => {
            return <img src={`https://via.placeholder.com/1920x200.png?text=JCCV`} className={className} width={0} height={0} alt={'Jaguar Car Club Of Victoria'}/>
        },
        card: (text, className, category = "") => {
            if (category === "catalog")
                return <img src={`https://via.placeholder.com/500x700.png?text=JCCV`} className={className} width={0} height={0} alt={'Jaguar Car Club Of Victoria'}/>
            else 
                return <img src={`https://via.placeholder.com/500x183.png?text=JCCV`} className={className} width={0} height={0} alt={'Jaguar Car Club Of Victoria'}/>
        }
    }
}

export default PlaceHolder