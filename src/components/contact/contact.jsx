import { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Scroll from 'react-scroll';
import emailjs from '@emailjs/browser'

import ThreeDots from '../../svg/threeDots'

import styles from './contact.module.scss'

const FormSchema = Yup.object().shape({
  name: Yup.string().min(2).max(50).required('required'),
  email: Yup.string().email('invalid email').required('required'),
  message: Yup.string()
})

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#55ad55',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },

  },
});

const Contact = ({ tellFilter }) => {
  const [responseMessage, setResponseMessage] = useState('')
  var Element  = Scroll.Element;

  useEffect(() => {
    setResponseMessage('')
  }, [])

  return (
      <ThemeProvider theme={theme}>
        <section className={styles.container} id="contact">
          <Element name="contact" />
              <div className="theForm">
                <Formik
                    initialValues={{
                      name: '', 
                      email: '', 
                      message: ''
                    }}
                    validationSchema={FormSchema}
                    onSubmit={
                      async (
                        values,
                        { setSubmitting, resetForm }
                      ) => {
                        setResponseMessage('')
                        setSubmitting(true)
                        console.log(values)
                        resetForm()
                        emailjs.send('service_81nklij', 'template_1frwjcm', values, 'PFWrcYfkkkwphjIX8')
                          .then(function(response) {
                            setResponseMessage('Thanks for the message, Filter Man will get back to you soon')
                            console.log('SUCCESS!', response.status, response.text);
                          }, function(error) {
                            setResponseMessage('Sorry, there was a problem sending the message, please try again later')
                            console.log('FAILED...', error);
                          });
                      }
                    }
                >
                    {({ values, errors, touched, isSubmitting, handleChange }) => {
                        return (
                            <Form name="fm_contact">
                                <TextField
                                fullWidth
                                id="name"
                                name="name"
                                label="name"
                                value={values.name}
                                onChange={handleChange}
                                error={touched.name && Boolean(errors.name)}
                                helperText={touched.name && errors.name}
                                margin="normal"
                                required
                            />
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                label="email"
                                value={values.email}
                                onChange={handleChange}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                                margin="normal"
                                required
                            />
                            <TextField
                                fullWidth
                                id="message"
                                name="message"
                                label={tellFilter}
                                value={values.message}
                                onChange={handleChange}
                                error={touched.message && Boolean(errors.message)}
                                helperText={touched.message && errors.message}
                                margin="normal"
                                multiline
                                rows={4}
                            />
                          
                            {isSubmitting ? (
                                <div className="form-blocks">
                                    <ThreeDots />
                                </div>
                            ) : (
                              <Button color="primary" variant="contained" fullWidth type="submit">
                                  submit
                              </Button>
                            )}
                        </Form>
                    )}}
                </Formik>
                {responseMessage.length !== 0 && (
                  <p className={styles.response}>{responseMessage}</p>
                )}
              </div>
        </section>
      </ThemeProvider>
  )
}

export default Contact