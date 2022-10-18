import { Switch } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { BsSun, BsMoon, BsLamp } from 'react-icons/bs'

const LangSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <Switch
        shadow
        color={'secondary'}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        iconOn={<BsMoon />}
        iconOff={<BsLamp />}
      />
    </div>
  )
}

export default LangSwitcher
