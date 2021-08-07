import VideoForm from "./VideoForm"

const countries = [
  {
    value: "burkina-fase",
    label: "Burkina Faso",
  },
  {
    value: "canada",
    label: "Canada",
  },
  {
    value: "morocco",
    label: "Morocco",
  },
  {
    value: "pakistan",
    label: "Pakistan",
  },
  {
    value: "south-africa",
    label: "South Africa",
  },
]

const languages = [
  {
    value: "english",
    label: "English",
  },
  {
    value: "french",
    label: "French",
  },
  {
    value: "arabic",
    label: "Arabic",
  },
]

const contentTypes = [
  {
    value: "short-film",
    label: "Short Film",
  },
  {
    value: "feature-film",
    label: "Feature Film",
  },
  {
    value: "promo",
    label: "Promo",
  },
  {
    value: "trailer",
    label: "Trailer",
  },
]

const categories = [
  {
    label: "FREE",
    value: true,
  },
  {
    label: "Education",
    value: false,
  },
  {
    label: "Fundraiser",
    value: false,
  },
]

const AddVideoPage = ({ handleCreateVideo }) => {
  return (
    <div className="pb-5">
      <VideoForm
        countries={countries}
        languages={languages}
        contentTypes={contentTypes}
        categories={categories}
        handleCreateVideo={handleCreateVideo}
      />
    </div>
  )
}

export default AddVideoPage
