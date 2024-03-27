import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from 'vee-validate'
import {
  required,
  min,
  max,
  email,
  confirmed,
  min_value as minValue,
  max_value as maxValue,
  alpha_spaces as alphaSpaces,
  not_one_of as excluded,
} from '@vee-validate/rules'
export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)
    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('email', email)
    defineRule('passwords_mismatch', confirmed)
    defineRule('max_value', maxValue)
    defineRule('min_value', minValue)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('excluded', excluded)
    defineRule('country_excluded', excluded)
    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short.`,
          max: `The field ${ctx.field} is too long.`,
          email: `The field ${ctx.field} must be a valid email.`,
          passwords_mismatch: 'The passwords do not match.',
          min_value: `The field ${ctx.field} is too low.`,
          max_value: `The field ${ctx.field} is too high.`,
          alpha_spaces: `The field ${ctx.field} may only contain alphabetic characters and spaces.`,
          excluded: `You are not allowed to use this value for the field ${ctx.field}.`,
          country_excluded: `Due to restrictions, we do not accept users from this location.`,
          tos: 'You must accept the Terms of Service.',
        }
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`
        return message
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    })
  },
}
