import content from './aboutMeData.json';
import getErrorMessage from '../pages/utils/getErrorMessage';

export default async function Content() {
  const paramString = 'populate'
  const searchParams = new URLSearchParams(window.location.search)
  
  const response = await fetch('./aboutMeData.json')
  const data = await response.json()


      try {
        if (searchParams.get(paramString) === 'populate') {
          return data
        }
        else {
          throw new Error('invalid search parameter')
        }
      } catch (error) {
        return {"error": true, "message": getErrorMessage(error)}
      }
}