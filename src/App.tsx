import CustomAccordionContainer from "./components/accordion/CustomAccordionContainer"

const App = () => {
  return (
    <div>
      <CustomAccordionContainer
        data={[
          {
            title: 'Accordion 1',
            content: 'Content for Accordion 1',
          },
          {
            title: 'Accordion 2',
            content: 'Content for Accordion 2',
          },
          {
            title: 'Accordion 3',
            content: 'Content for Accordion 3',
          },
        ]}
        detailsBgColor="red"
        summaryBgColor="blue"
      />
    </div>
  )
}
export default App