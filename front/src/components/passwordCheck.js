import React, { useState, useCallback } from 'react';
import { Input, Checkbox, Button, Modal, Form } from 'antd';

import useInput from '../useInput';

const ErrorMessage = styled.div`
    color: red;
`;

const FormWrapper = styled(Form)`
    margin: 'auto';
    margin-top: 10px;
`;

const ButtonMargin = styled(Button)`
    margin-top: 15px;
`;

const Font = styled.span`
    color: red;
    font-weight: bold;
`;

const Signup = () => {
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const inputMargin = useMemo(() => ({ marginBottom: '14px' }), []);
    const marginTop15 = useMemo(() => ({ marginTop: '15px' }), []);
    const marginTop10 = useMemo(() => ({ marginTop: '10px' }), []);
    
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
          return setPasswordError(true);
        }
        if (!term) {
          return setTermError(true);
        }
        // 누나 axios 요청 여기다 쓰면 될듯
      }, [email, password, passwordCheck, term]);
    
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
        // 비밀번호와 비밀번호 확인이 일치하는지 확인한다.
        // 둘이 일치하지 않으면 passwordError가 true가 되고
        // 둘이 일치하면 passwordError가 false가 된다.
        // 따라서 passwordError가 true가 되면 에러를 표시해주면 된다.
    }, [password]);

    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, []);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
            <FormWrapper
                onFinish={onSubmit}
            >
                <div>
                    <label htmlFor="user-email">이메일</label>
                    <br />
                    <Input 
                        name="user-email" 
                        type="email"
                        value={email} 
                        required 
                        onChange={onChangeEmail}
                        style={inputMargin}
                    />
                </div>
                <div>
                    <label htmlFor="user-nickname">닉네임</label>
                    <br />
                    <Input 
                        name="user-nickname" 
                        value={nickname} 
                        required 
                        onChange={onChangeNickname}
                        style={inputMargin}
                    />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input 
                        name="user-password" 
                        type="password"
                        value={password} 
                        required 
                        onChange={onChangePassword}
                        style={inputMargin}
                    />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호 체크</label>
                    <br />
                    <Input 
                        name="user-password-check" 
                        type="password"
                        value={passwordCheck} 
                        required 
                        onChange={onChangePasswordCheck}
                    />
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div
                    style={marginTop15}
                >
                    <Checkbox 
                        name="user-term" 
                        checked={term} 
                        onChange={onChangeTerm}
                    >
                    <Font onClick={showModal}>
                        약관을 확인하려면 눌러주세요
                    </Font>
                    <Modal title="약관 내용" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <p>강태웅과 사이좋게 지낸다!</p>
                        <p>강태웅과 자주 연락한다!</p>
                        <p>강태웅과 자주 놀아준다!</p>
                        <p>강태웅에게 밥을 자주 사준다!</p>
                    </Modal>
                    </Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야합니다.</ErrorMessage>}
                </div>
                <div style={marginTop10}>
                    <ButtonMargin type="primary" htmlType="submit" loading={signUpLoading}>가입하기</ButtonMargin>
                </div>
            </FormWrapper>
          )
};

export default Signup;
