import mongoose from 'mongoose';

async function connect(uri) {
    try{
        await mongoose.connect(uri);
        console.log('Connect success!!')
    } catch (e) {
        console.log(e)
    }
}

export default connect