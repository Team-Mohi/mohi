import React from 'react';
import './ModalHelpQuestion.css';
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from 'react-router-dom';



export const HelpQuestion1 = () => {

    return (
        <React.Fragment>
            <div className="modal-custom modal-help-question-container">
                <div className="modal-help-question-header">
                    <h5>Tôi có thể tìm thấy phần cài đặt Mohi ở đâu ?</h5>
                </div>
                <div className="modal-help-question-main">
                    <p>Bạn chọn <AiFillCaretDown /> ở bên trên và chọn tới <Link to="/setting">Cài đặt</Link></p>
                </div>
            </div>
        </React.Fragment>
    )
}

export const HelpQuestion2 = () => {

    return (
        <React.Fragment>
            <div className="modal-custom modal-help-question-container">
                <div className="modal-help-question-header">
                    <h5>Làm cách nào để thay đổi hoặc đặt lại mật khẩu Mohi ?</h5>
                </div>
                <div className="modal-help-question-main">
                    <p>Bạn chọn <AiFillCaretDown /> ở bên trên và chọn tới <Link to="/setting">Cài đặt</Link></p>
                    <p>Bạn tiếp tục chọn tới đổi mật khẩu và chọn <b>Quên mật khẩu?</b>   </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export const HelpQuestion3 = () => {

    return (

        <div className="modal-custom modal-help-question-container">
            <div className="modal-help-question-header">
                <h5>Làm cách nào để thay đổi hoặc đặt lại mật khẩu Mohi ?</h5>
            </div>
            <div className="modal-help-question-main">
                <p>Bạn chỉ cần vô trang cá nhân bạn muốn bật và chọn mục bật thông báo thôi!   </p>
            </div>
        </div>
    )
}

export const HelpQuestion4 = () => {

    return (
        <React.Fragment>
            <div className="modal-custom modal-help-question-container">
                <div className="modal-help-question-header">
                    <h5>Tên của bạn không được bao gồm:</h5>
                    <ul>
                    <li><Link>Biểu tượng, số, cách viết hoa bất thường, ký tự lặp lại hoặc dấu chấm.</Link></li>
                    <li><Link>Ký tự của nhiều ngôn ngữ.</Link></li>
                    <li><Link>Danh xưng bất kỳ (ví dụ: nghề nghiệp, tôn giáo).</Link></li>
                    <li><Link>Từ hoặc cụm từ thay cho tên.</Link></li>
                    <li><Link>Các từ xúc phạm hoặc khêu gợi.</Link></li>
                    <li><Link>Biểu tượng, số, cách viết hoa bất thường, ký tự lặp lại hoặc dấu chấm.</Link></li>
                </ul>
                </div>
                
                <div className="modal-help-question-header">
                    <h5>Nếu tên của bạn tuân thủ các tiêu chuẩn của chúng tôi nhưng vẫn gặp sự cố khi đổi tên</h5>
                    <ul>
                    <li><Link>Tên trên trang cá nhân phải là tên mà bạn bè hay gọi hàng ngày. Tên này cũng xuất hiện trên giấy tờ tùy thân hoặc tài liệu trong danh sách giấy tờ tùy thân của chúng tôi.</Link></li>
                    <li><Link>Có thể dùng biệt danh làm tên hoặc tên đệm nếu là biến thể của tên thật (như Bob thay vì Robert).</Link></li>
                    <li><Link>Bạn cũng có thể liệt kê tên khác trên tài khoản của mình (ví dụ: tên thời con gái, biệt danh, tên trong công việc).</Link></li>
                    <li><Link>Trang cá nhân chỉ dành cho mục đích sử dụng cá nhân. Bạn có thể tạo Trang cho doanh nghiệp, tổ chức hoặc ý tưởng.</Link></li>
                    <li><Link>Không được giả mạo ai đó hoặc điều gì đó.</Link></li>
                </ul>
                </div>
                
            </div>
        </React.Fragment>
    )
}
