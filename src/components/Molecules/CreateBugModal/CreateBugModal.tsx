import { ButtonsWrapper } from "../../../pages/Dashboard/Dashboard.styles";
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
  return (
    <Modal {...props}>
      <S.ModalWrapper>
        <InputGroup>
          <Label>Title</Label>
          <Input />
        </InputGroup>
        <InputGroup>
          <Label>Description</Label>
          <S.Textarea cols={30} rows={5} />
        </InputGroup>
        <InputGroup>
          <Label>Status</Label>
          <Select>
            <option>Solved</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </Select>
        </InputGroup>
        <S.ModalFooter>
          <Button>Report new bug</Button>
          <OutlineButton>Cancel</OutlineButton>
        </S.ModalFooter>
      </S.ModalWrapper>
    </Modal>
  );
};
