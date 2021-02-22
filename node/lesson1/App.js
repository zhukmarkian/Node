const fs=require('fs')
const path = require('path')
const filePath=path.join(__dirname , '/1800')
const filePath2=path.join(__dirname , '/2000')

fs.readdir(filePath2, (err, files) => {

    if (err) {

        console.log(err);

        return;

    }
    files.forEach(file => {

        fs.readFile(path.join(filePath2, `${file}`), (err1, data) => {

            if (err1) {

                console.log(err1);

                return;

            }

            let search = data.toString().search(('"gender":"male"'));

            if (search === -1) {

                fs.rename(path.join(filePath2, `${file}`), path.join(filePath, `${file}`), err2 => {

                    if (err2) {

                        console.log(err2);

                        return;

                    }

                })

            }

        })

    })

})

fs.readdir(filePath,(err,files)=>{
  if(err){
      console.log(err)
      return;
  }

 console.log(files)


    files.forEach(file => {

        fs.readFile(path.join(filePath, `${file}`), (err1, data) => {
            if (err) {

                console.log(err);

                return ;
            }
            console.log(data)
            let search = data.toString().search(('"gender":"female"'));

            if (search === -1) {

                fs.rename(path.join(filePath, `${file}`), path.join(filePath2, `${file}`), err2 => {

                    if (err2) {

                        console.log(err2);

                        return;

                    }


                })


            }

        })
    })
})


