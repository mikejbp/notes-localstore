import { Container } from "reactstrap"

export default function ContainerApp({ children }) {
  return (
    <Container className="p-4" style={{display: 'flex',justifyContent: 'center'}}>
      <div className="">{children}</div>
    </Container>
  )
}
