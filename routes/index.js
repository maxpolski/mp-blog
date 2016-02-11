import fs from 'fs';

class routes {
  index(req, res) {
    let pathToView = './public/views/index.html';
    let response = new Promise((resolve, reject) => {
      fs.access(pathToView, fs.R_OK, (err) => {
        if(err) {
          reject(err);
        }
        resolve();
      });
    });

    response
      .then(() => {
        return new Promise ((resolve, reject) => {
          fs.readFile(pathToView, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
      })
      .then( data => res.set('Content-Type', 'text/html').send(data).status(200))
      .catch( err => res.status(500).end('not ok'));
  }
}

export default routes;
