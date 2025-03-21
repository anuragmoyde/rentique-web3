import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
const Add = () => {
    const [gender, setGender] = useState("");
    const [name, setName] = useState("Example");
    const [sizes, setSizes] = useState([]);
    const [collection, setCollection] = useState("");
    const [clothing, setClothing] = useState("");
    const [price, setPrice] = useState("123");
    const [display, setDisplay] = useState();
    const [vendor, setVendor] = useState("Batman");
    const [description, setDescription] = useState("");
    const handleSizeChange = (event) => {
        const size = event.target.value;
        if (event.target.checked) {
            setSizes((prev) => [...prev, size]);
        }
        else {
            setSizes((prev) => prev.filter((item) => item !== size));
        }
    };
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handleCollectionChange = (event) => {
        setCollection(event.target.value);
    };
    const handleSubmit = (event) => {
        console.log(name, gender, sizes, collection, clothing, price, display, vendor, description);
    };
    // FILE HANDLING
    const fileUploadRef = useRef();
    const handleImageUpload = (event) => {
        event.preventDefault();
        fileUploadRef.current.click();
    };
    const uploadImageDisplay = () => {
        const uploadedFile = fileUploadRef.current.files[0];
        const cachedURL = URL.createObjectURL(uploadedFile);
        setDisplay(cachedURL);
    };
    return (<div className='addDisplay'>
        
        <form className='addDetails' onSubmit={handleSubmit}>
            <input type='name' placeholder='Name' onChange={(e) => setName(e.target.value)}/>
            <div className='addBox'>
                <h3>Select Sizes</h3>
                <div className="gender-selector">
                    <label className="radio-container">
                        <input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={handleGenderChange}/>
                        <span className="radio-label">Male</span>
                    </label>

                    <label className="radio-container">
                        <input type="radio" name="gender" value="Unisex" checked={gender === "Unisex"} onChange={handleGenderChange}/>
                        <span className="radio-label">Unisex</span>
                    </label>

                    <label className="radio-container">
                        <input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={handleGenderChange}/>
                        <span className="radio-label">Female</span>
                    </label>
                </div>
            </div>
            <div className='addBox'>
                <h3>Select Collection</h3>
                <div className="collection-selector">
                    <label className="radio-container">
                        <input type="radio" name="collection" value="Summer" checked={collection === "Summer"} onChange={handleCollectionChange}/>
                        <span className="radio-label">Summer</span>
                    </label>

                    <label className="radio-container">
                        <input type="radio" name="collection" value="Spring" checked={collection === "Spring"} onChange={handleCollectionChange}/>
                        <span className="radio-label">Spring</span>
                    </label>

                    <label className="radio-container">
                        <input type="radio" name="collection" value="Autumn" checked={collection === "Autumn"} onChange={handleCollectionChange}/>
                        <span className="radio-label">Autumn</span>
                    </label>

                    <label className="radio-container">
                        <input type="radio" name="collection" value="Winter" checked={collection === "Winter"} onChange={handleCollectionChange}/>
                        <span className="radio-label">Winter</span>
                    </label>
                </div>

            </div>
            <form className='addBox'>
                <h3>Upload Image</h3>
                <button type='submit' id='fileClick' onClick={handleImageUpload}>
                    Choose
                    
                </button>
                <input onChange={uploadImageDisplay} type='file' id='file' ref={fileUploadRef} hidden/>                
            </form>
            <div className='addBox'>
                <h3>Select Sizes</h3>
                <div className="size-selector-container">
                
                <label className='sizeCheck'>
                    <input type="checkbox" value="S" checked={sizes.includes('S')} onChange={handleSizeChange}/>
                    S
                </label>
                <label className='sizeCheck'>
                    <input type="checkbox" value="M" checked={sizes.includes('M')} onChange={handleSizeChange}/>
                    M
                </label>
                <label className='sizeCheck'>
                    <input type="checkbox" value="L" checked={sizes.includes('L')} onChange={handleSizeChange}/>
                    L
                </label>
            </div>
            </div>
            <div className='addBox'>
                <h3>Set Price</h3>
                <input placeholder='Price' onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div className='addBox'>
                <h3>Set Description</h3>
                <input placeholder='Description' onChange={(e) => setDescription(e.target.value)}/>
            </div>
            
            <button type='submit'>Submit</button>
        </form>
            
        <div className='addPreview'>
            <h1>Preview</h1>
            <div className='Preview'>
                <div className='Basic'>
                    <img src={display} alt='Preview'></img>
                </div>
                <span>{name}</span>
                <span>${price}</span>
                <div className='size-span'>{sizes.map((size, index) => (<span key={index} className="">
                    {size}
                    {index < sizes.length - 1 && ", "}
                </span>))}</div>
                
            </div>   
        </div>

    </div>);
};
export default Add;
