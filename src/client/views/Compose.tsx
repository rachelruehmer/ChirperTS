import * as React from 'react';
import { useState } from 'react';

const Compose: React.FC<ComposeProps> = () => {

    const [username, setUserName] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

    const submitChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let res = await fetch('/api/chirps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, message})
    }) 
    }

    return (
      <main className="container">
          <section className="row my-2 justify-content-cent">
              <div className="col-md-8">
                  <form className="form-group p-3 shadow border rounded"></form>
                    <label htmlFor="username">Username</label>
                    <input value={username} onChange={handleUsernameChange} placeholder="Chirper chirpin" id="username" type="text" className="form-control"/>
                    <label htmlFor="message">Message</label>
                    <textarea value={message} onChange={handleMessageChange} rows={8} placeholder="What's up chirper?" className="form-control" name="message" id="message" />
                    <button onClick={submitChirp} className="btn btn-outline-primary btn-block mt-3 w-75 mx-auto">Chirp It!</button>
              </div>
          </section>
      </main>
    );

};

interface ComposeProps {}

export default Compose;