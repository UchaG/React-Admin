import { Box } from "@mui/material"
import Header from "../../components/Header"
import { CustomAccordion } from "./Accordion"

const questions = [
    {question: "Some question", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi commodi reprehenderit illum corrupti corporis magni doloribus in. Tempora molestiae nihil, soluta ipsa ex facilis autem dolore dolor a, obcaecati molestias!"},
    {question: "Another question", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi commodi reprehenderit illum corrupti corporis magni doloribus in. Tempora molestiae nihil, soluta ipsa ex facilis autem dolore dolor a, obcaecati molestias!"},
    {question: "Interesting question", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi commodi reprehenderit illum corrupti corporis magni doloribus in. Tempora molestiae nihil, soluta ipsa ex facilis autem dolore dolor a, obcaecati molestias!"},
    {question: "Popular question", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi commodi reprehenderit illum corrupti corporis magni doloribus in. Tempora molestiae nihil, soluta ipsa ex facilis autem dolore dolor a, obcaecati molestias!"},
    {question: "Final question", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi commodi reprehenderit illum corrupti corporis magni doloribus in. Tempora molestiae nihil, soluta ipsa ex facilis autem dolore dolor a, obcaecati molestias!"}
]

const FAQ = () => {
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="FAQ page" />
            {
                questions.map(question => (
                    <CustomAccordion key={question.question} question={question.question} answer={question.answer}/>
                ))
            }
        </Box>
    )
}

export default FAQ;