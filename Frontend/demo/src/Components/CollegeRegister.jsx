import React from 'react';
import { useForm } from 'react-hook-form';
import Dropzone from 'react-dropzone';
import '../CSS/CollegeRegistration.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

const CollegeRegister = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    };
        let base64code ="";

    const onChanges = (e) => {
        const files = e.target.files 
        const file = files[0];
        getbase64(file)
    }

    const onLoad = (fileString) => {
        console.log(fileString)
        this.base64code=fileString
    }


    const getbase64 = (file) =>{
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            onLoad(reader.result);
        }
    }


    const handleChangeStatus = ({ meta, remove }, status) => {
    if (status === 'headers_received') {
      toast(`${meta.name} uploaded!`)
      remove()
    } else if (status === 'aborted') {
      toast(`${meta.name}, upload failed...`)
    }
    }
    
    // const handleSubmit = () => { }
  return (
    <div style={{marginTop:"20px",marginBottom:"20px"}}>
       <div className="registration-container">
            <h2>College Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name:</label>
                <input type="text" {...register('name')} />

                <label>Description:</label>
                <textarea {...register('description')} />

                <label>City:</label>
                <input type="text" {...register('city')} />

                <label>State:</label>
                <input type="text" {...register('state')} />

                <label>University:</label>
                <select {...register('university')}>
                    <option value="university1">University 1</option>
                    <option value="university2">University 2</option>
                </select>

                <label>College Image:</label>
                  <div id="toast">Upload</div>
      <Dropzone
        // getUploadParams={getUploadParams}
        onChanges ={onChanges}
        onChangeStatus={handleChangeStatus}
        maxFiles={1}
        multiple={false}
        canCancel={false}
        inputContent="Drop A File"
        styles={{
          dropzone: { width: 400, height: 200 },
          dropzoneActive: { borderColor: 'green' },
        }}
      />

                <label>College Website:</label>
                <input type="text" {...register('website')} />

                <button type="submit">Register</button>
            </form>
        </div>
    </div>
  )
}

export default CollegeRegister
