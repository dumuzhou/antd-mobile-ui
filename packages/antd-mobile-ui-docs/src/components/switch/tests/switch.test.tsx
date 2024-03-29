import React, { useState } from 'react'
import { fireEvent, render, testA11y, waitFor, screen } from 'testing'
import Switch from '..'

const classPrefix = `adm-switch`

describe('Switch', () => {
  test('a11y', async () => {
    await testA11y(<Switch />)
  })

  test('renders with disabled', () => {
    render(<Switch disabled />)
    expect(screen.getByRole('switch')).toHaveClass(`${classPrefix}-disabled`)
  })

  test('controlled mode', async () => {
    const App = () => {
      const [checked, setChecked] = useState(false)
      return (
        <Switch
          checked={checked}
          onChange={checked => {
            setChecked(checked)
          }}
        />
      )
    }

    render(<App />)
    const switchEl = screen.getByRole('switch')
    fireEvent.click(switchEl)
    expect(switchEl).toHaveClass(`${classPrefix}-checked`)
    fireEvent.click(switchEl)
    expect(switchEl).not.toHaveClass(`${classPrefix}-checked`)
  })

  test('`beforeChange` should not work with loading', async () => {
    const beforeChange = jest.fn()
    render(<Switch loading beforeChange={beforeChange} />)
    const switchEl = screen.getByRole('switch')
    fireEvent.click(switchEl)
    expect(
      switchEl.querySelectorAll(`.${classPrefix}-spin-icon`).length
    ).toBeTruthy()
    expect(beforeChange).not.toBeCalled()
  })

  test('`beforeChange` in async mode', async () => {
    jest.useFakeTimers()
    const App = () => {
      const beforeChange = (): Promise<void> => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve()
          }, 500)
        })
      }
      return <Switch beforeChange={beforeChange} />
    }

    render(<App />)
    const switchEl = screen.getByRole('switch')
    fireEvent.click(switchEl)
    expect(switchEl).toHaveClass(`${classPrefix}-disabled`)
    jest.runAllTimers()
    await waitFor(() => {
      expect(switchEl).toHaveClass(`${classPrefix}-checked`)
    })
    jest.useRealTimers()
  })
})
