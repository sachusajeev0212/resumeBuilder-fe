import { toast } from "react-toastify"
import { getResumes } from "../services/AllApis"
import { useEffect, useState } from "react"
import { Box, Button } from "@mui/material"
import Typography from "@mui/material/Typography"
import Preview from "../components/Preview"
import { Link } from "react-router-dom"

const AllDownloads = () => {
  const [resumeDatas,setResumeDatas]=useState([])

  useEffect(() => {
    const getData = async () => {
    try{
      let apiResponse=await getResumes()
      if (apiResponse.status == 200) {
        setResumeDatas(apiResponse.data)
      } else {
        toast.error('api call failed')
      }
    }catch(error){
      console.log(error)
      toast.error('api call failed')
    }
    }

    getData()
  }, [])

  return (
    <Box>
      {resumeDatas?.length > 0 ? (
        <Box>
          <Typography variant="h2" sx={{textAlign:'center',p:4}}>All Downloads</Typography>
          
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
              gap: 3,
              px: { xs: 2, sm: 3 },
            }}
          >
            {resumeDatas.map((eachResume, index) => (
              <Box key={eachResume.id || index}>
                <Button
                  component={Link}
                  to={`/resumes/${eachResume.id}`}
                  sx={{ ml: 4, mb: 1 }}
                >
                  View Details
                </Button>
                <Preview resumeData={eachResume} />
              </Box>
            ))}
          </Box>
        </Box>
      ) : (
        <Typography>no resumes available</Typography>
      )}
    </Box>
  )
}

export default AllDownloads