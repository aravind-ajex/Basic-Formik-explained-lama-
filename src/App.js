import { useFormik } from 'formik';
import * as YUP from "yup";
import './App.css';

const validation = YUP.object({
  name: YUP.string().required("Please enter the name"),
  password: YUP.string().required("Please enter the password")
})

function App() {
  // functional component ---> useFormik
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, resetForm } = useFormik({
    initialValues: {
      name: "",
      password: ""
    },
    validationSchema: validation,
    onSubmit: (data) => console.log("Final data:", data)
  });
  console.log({ values, errors, touched })

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          name='name'
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Enter the Name'
        />
        {errors.name && touched.name && <p>{errors.name}</p>}
        <input
          name='password'
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Enter the Password'
        />
        {errors.password && touched.password && <p>{errors.password}</p>}

        <button type='submit' >Save</button>
        <button type='reset' onClick={()=>{resetForm()}} >Reset</button>
      </form>
    </div>
  );
}

export default App;
