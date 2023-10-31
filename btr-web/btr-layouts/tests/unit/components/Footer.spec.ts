import { expect, describe, test } from 'vitest'
import { setup } from '@nuxt/test-utils'
import { mount } from '@vue/test-utils'
import Footer from '../../../components/bcros/Footer.vue'

describe('Tests for Footer.vue', async () => {
  await setup({
    // Test context options
  })

  test('UTooltip component rendered', () => {
    const wrapper = mount(Footer)
    const tooltip = wrapper.find('#footer-tooltip')
    expect(tooltip.exists()).toBeTruthy()
  })

  test('footer nav links rendered', () => {
    const wrapper = mount(Footer)

    const expectedTexts = ['Home', 'Disclaimer', 'Privacy', 'Accessibility', 'Copyright']
    const expectedHrefs = [
      '/',
      'https://www2.gov.bc.ca/gov/content/home/disclaimer',
      'https://www2.gov.bc.ca/gov/content/home/privacy',
      'https://www2.gov.bc.ca/gov/content/home/accessibility',
      'https://www2.gov.bc.ca/gov/content/home/copyright'
    ]

    const links = wrapper.findAll('a')
    expect(links.length).toBe(expectedTexts.length)

    links.forEach((link, index) => {
      expect(link.text()).toBe(expectedTexts[index])
      expect(link.attributes('href')).toBe(expectedHrefs[index])
    })
  })
})