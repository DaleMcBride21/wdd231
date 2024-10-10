async function getData() {
    const username = '22090595219092';
    const password = 'EATuSm-mCyGQIguNAoX_hNYxNTEt9to5tn24VJD6';
    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(`${username}:${password}`));
  
    try {
      const response = await fetch('https://app.ammoreadycloud.com/api/v2/catalog', {
        method: 'GET',
        headers: headers
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  getData();

  