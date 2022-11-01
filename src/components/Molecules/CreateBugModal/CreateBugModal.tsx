import { useCallback, useRef } from "react";
import { api } from "../../../services/api";
import { Button } from "../../Atoms/Button/Button";
import { OutlineButton } from "../../Atoms/Button/OutlineButton";
import { Input } from "../../Atoms/Input/Input";
import { Select } from "../../Atoms/Select/Select";
import { InputGroup, Label } from "../Form/Form.styles";
import { Modal } from "../Modal/Modal";
import * as S from "./CreateBugModal.styles";

interface CreateBugModalProps {
  toggleModal: () => void;
  isVisible: boolean;
}

export const CreateBugModal = (props: CreateBugModalProps) => {

  const Title = useRef<HTMLInputElement>(null);
  const Description = useRef<HTMLTextAreaElement>(null)
  const Status = useRef<HTMLSelectElement>(null)

  const reportBug = useCallback(async () => {
    api.post('/api/bugs', {
      title: Title?.current?.value,
      description: Description?.current?.value,
      status: Status?.current?.value
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
  }, [])

  return (
    <Modal {...props}>
      <S.ModalWrapper>
        <InputGroup>
          <Label>Title</Label>
          <Input ref={Title} />
        </InputGroup>
        <InputGroup>
          <Label>Description</Label>
          <S.Textarea ref={Description} cols={30} rows={5} />
        </InputGroup>
        <InputGroup>
          <Label>Status</Label>
          <Select ref={Status}>
            <option>Solved</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </Select>
        </InputGroup>
        <S.ModalFooter>
          <Button onClick={() => reportBug()}>Report new bug</Button>
          <OutlineButton>Cancel</OutlineButton>
        </S.ModalFooter>
      </S.ModalWrapper>
    </Modal>
  );
};
