import {urlFor} from '../utils/sanityClient'

interface HeroProps {
  title: string
  subtitle: string
  backgroundImage: any
}

export const Hero: React.FC<HeroProps> = ({title, subtitle, backgroundImage}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${urlFor(backgroundImage).width(1200).url()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0',
        color: '#000000',
        textAlign: 'center',
      }}
    >
      <h1 className='text-2xl font-bold'>{title}</h1>
      <p className='font-serif underline'>{subtitle}</p>
    </div>
  )
}
