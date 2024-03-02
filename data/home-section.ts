import content from './about-me-section.json';

async function Content() {
  const paramString = 'populate'
  const searchParams = new URLSearchParams(window.location.search)
  
  const response = await fetch('./about-me-section.json')
  const data = await response.json()


    return new Promise((resolve, reject) => {
      try {
        if (searchParams.get(paramString) === 'populate') {
          const response = await fetch('./about-me-section.json')
          const data = await response.json()
          resolve(data)
        }
        else {
          throw new Error('invalid search parameter')
        }
      } catch (error) {
        reject({"error": true, "message": error.message})
      }
    })
  