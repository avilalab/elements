import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { ModalContextProvider } from "./ModalContext";
import { Button } from "../Button/Button";
import useModal from "./useModal";
import { LoginForm } from "../Auth/LoginForm/LoginForm";

export default {
    title: "Components/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
    decorators: [
        (Story) => (
            <ModalContextProvider>
                <div style={{ width: "100%", height: "100%" }}>
                    <Story />
                </div>
            </ModalContextProvider>
        ),
    ],
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    decorators: [
        (Story) => {
            const { HandleOpenModal, HandleCloseModal } = useModal();

            return (
                <>
                    <Modal />
                    <Button
                        label="Open Modal"
                        color="primary"
                        onClick={() =>
                            HandleOpenModal(
                                <div
                                    style={{
                                        width: "30%",
                                        padding: 24,
                                        backgroundColor: "#fff",
                                        borderRadius: 8,
                                        display: "flex",
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <LoginForm
                                        title="Login"
                                        onSubmitForm={() => {
                                            HandleCloseModal();
                                            return true;
                                        }}
                                    />
                                    <Button label="Cancel" onClick={() => HandleCloseModal()} />
                                </div>
                            )
                        }
                    />
                </>
            );
        },
    ],
};

{/* <div
    style={{
        width: "20%",
        padding: 24,
        backgroundColor: "#fff",
        borderRadius: 8,
        display: "flex",
        flexDirection: 'column',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center'
    }}
>
    <span>Modal is working!</span>
    <Button
        label="Close modal"
        color="secondary"
        onClick={() => HandleCloseModal()}
    />
</div> */}