import { Switch } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { BsSun, BsMoon } from 'react-icons/bs'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <Switch
        shadow
        color={'secondary'}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        iconOn={<BsMoon />}
        iconOff={<BsSun />}
      />
    </div>
  )
}

export default ThemeSwitcher
