import React from 'react'
import {Formik, Form, Field, FormikProps} from 'formik';

type Props = {}

function Register({}: Props) {
  return (
    <React.Fragment>
      <div>
        <Formik initialValues={{}} onSubmit={(e) => alert(JSON.stringify(e))}>
          {(props) => (
            <form>
              <input type="text" name="" id="" />
            </form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
}

export default Register