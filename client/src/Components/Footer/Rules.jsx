import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Collapse, Tabs } from 'antd';
import './Rules.css';


function Rules() {
    const { TabPane } = Tabs;
    const { Panel } = Collapse;
    const history = useHistory();
    let key = history.location.state.key ? history.location.state.key : 1;
console.log(key);
    const Rules = () => {
        return (
            <>
                <div className="rules-container">
                    <div className="rules-content">
                        <Tabs defaultActiveKey={`${key}`}>
                            <TabPane tab="Điều khoản dịch vụ" key="1">
                                <Collapse className="rules-collapse" defaultActiveKey={['0']} >
                                    <Panel header="1. Dịch vụ chúng tôi cung cấp" key="1">
                                        <div className="footer-content">
                                            <span>- Mang lại trải nghiệm dành riêng cho bạn</span>
                                            <span>- Kết nối bạn với những người và tổ chức mà bạn quan tâm</span>
                                            <span>- Giúp bạn thể hiện bản thân và chia sẻ về những gì quan trọng với mình</span>
                                            <span>- Chống hành vi có hại đồng thời bảo vệ và hỗ trợ cộng đồng của chúng ta</span>
                                            <span>- Sử dụng và phát triển các công nghệ tiên tiến để cung cấp những dịch vụ an toàn và thiết thực cho mọi người</span>
                                            <span>- Nghiên cứu các cách cải thiện dịch vụ của chúng tôi</span>
                                            <span>- Mang lại trải nghiệm nhất quán và liền mạch trên mọi Sản phẩm của các công ty thuộc Mohi</span>
                                            <span>- Cho phép truy cập toàn cầu vào các dịch vụ của chúng tôi</span>
                                        </div>
                                    </Panel>
                                    <Panel header="2. Cách chúng tôi duy trì dịch vụ của mình" key="2">
                                        <div className="footer-content">
                                            <span>- Thay vì phải trả phí để sử dụng Mohi cùng với các sản phẩm và dịch vụ khác do chúng tôi cung cấp, khi sử dụng Sản phẩm của Mohi thuộc phạm vi điều chỉnh của các Điều khoản này, bạn đồng ý cho chúng tôi hiển thị với bạn quảng cáo mà các doanh nghiệp và tổ chức đã trả tiền để quảng bá trên. Chúng tôi sử dụng dữ liệu cá nhân, chẳng hạn như thông tin về hoạt động và sở thích, để hiển thị cho bạn những quảng cáo phù hợp hơn.</span>
                                            <span>- Bảo vệ quyền riêng tư của mọi người chính là điều mà chúng tôi chú trọng khi thiết kế hệ thống quảng cáo của mình</span>
                                            <span>- Chúng tôi cũng báo cáo hiệu quả quảng cáo cho các nhà quảng cáo để họ nắm được cách mọi người tương tác với nội dung của mình trên và ngoài Mohi</span>
                                        </div>
                                    </Panel>
                                    <Panel header="3. Cam kết của bạn với Mohi và cộng đồng của chúng tôi" key="3">
                                        <div className="footer-content">
                                            <span>- Những đối tượng có thể sử dụng Mohi</span>
                                            <span>- Những điều bạn có thể chia sẻ và thực hiện trên Mohi</span>
                                            <span>- Những quyền bạn cấp cho chúng tôi</span>
                                            <span>- Các giới hạn về việc sử dụng tài sản trí tuệ của chúng tôi</span>
                                        </div>
                                    </Panel>
                                    <Panel header="4. Các quy định bổ sung" key="4">
                                        <div className="footer-content">
                                            <span>- Tạm ngừng hoặc chấm dứt tài khoản</span>
                                            <span>- Giới hạn trách nhiệm pháp lý</span>
                                            <span>- Tranh chấp</span>
                                        </div>
                                    </Panel>
                                    <Panel header="5. Các điều khoản và chính sách khác có thể áp dụng cho bạn" key="5">
                                        <div className="footer-content">
                                            <span>- Tiêu chuẩn cộng đồng</span>
                                            <span>- Điều khoản thương mại</span>
                                            <span>- Chính sách quảng cáo</span>
                                            <span>- Điều khoản về quảng cáo tự phục vụ</span>
                                            <span>- Chính sách về Trang, Nhóm và Sự kiện</span>
                                            <span>- Chính sách nền tảng của Mohi</span>
                                            <span>- Điều khoản thanh toán dành cho nhà phát triển</span>
                                            <span>- Chính sách thương mại</span>
                                            <span>- Tài nguyên thương hiệu Mohi</span>
                                            <span>- Nguyên tắc về âm nhạc</span>
                                        </div>
                                    </Panel>
                                </Collapse>
                            </TabPane>
                            <TabPane tab="Chính sách dữ liệu" key="2">
                                <div className="rules-detals">
                                    <strong>Chính sách này mô tả thông tin mà chúng tôi xử lý để hỗ trợ Mohi</strong>
                                </div>
                                <Collapse className="rules-collapse" defaultActiveKey={['0']} >
                                    <Panel header="1. Chúng tôi thu thập những loại thông tin nào?" key="1">
                                        <div className="footer-content">
                                            <span>- Những hoạt động và thông tin do bạn và người khác thực hiện/cung cấp.</span>
                                            <span>- Thông tin về thiết bị</span>
                                            <span>- Thông tin từ đối tác.</span>
                                        </div>
                                    </Panel>
                                    <Panel header="2. Chúng tôi sử dụng thông tin này như thế nào?" key="2">
                                        <div className="footer-content">
                                            <span>- Cung cấp, cá nhân hóa và cải tiến Sản phẩm của chúng tôi.</span>
                                            <span>- Cung cấp dịch vụ đo lường, phân tích và các dịch vụ kinh doanh khác.</span>
                                            <span>- Cải thiện độ an toàn, tính toàn vẹn và bảo mật.</span>
                                            <span>- Liên lạc với bạn.</span>
                                            <span>- Nghiên cứu và đổi mới vì cộng đồng.</span>
                                        </div>
                                    </Panel>
                                    <Panel header="3. Thông tin này được chia sẻ như thế nào?" key="3">
                                        <div className="footer-content">
                                            <span>- Những người và tài khoản mà bạn chia sẻ và liên lạc</span>
                                            <span>- Nội dung người khác chia sẻ hoặc chia sẻ lại về bạn</span>
                                            <span>- Thông tin về trạng thái hoạt động hoặc sự hiện diện của bạn trên Sản phẩm của chúng tôi.</span>
                                            <span>- Các ứng dụng, trang web và phần tích hợp của bên thứ ba có trên hoặc sử dụng Sản phẩm của chúng tôi </span>
                                            <span>- Chủ sở hữu mới. </span>
                                            <span>- Các đối tác sử dụng dịch vụ phân tích của chúng tôi. </span>
                                            <span>- Nhà quảng cáo.. </span>
                                            <span>- Đối tác đo lường. </span>
                                            <span>- Đối tác cung cấp hàng hóa và dịch vụ trong Sản phẩm của chúng tôi. </span>
                                            <span>- Nhà cung cấp và nhà cung cấp dịch vụ. </span>
                                            <span>- Nhà nghiên cứu và học giả. </span>
                                            <span>- Yêu cầu pháp lý hoặc yêu cầu của cơ quan hành pháp. </span>
                                        </div>
                                    </Panel>
                                    <Panel header="4. Các Công ty của Mohi làm việc cùng nhau như thế nào?" key="4">
                                        <div className="footer-content">
                                            <span>- Mohi dùng cùng một cơ sở hạ tầng, hệ thống và công nghệ với các Công ty khác của Mohi (bao gồm cả WhatsApp và Oculus) để cung cấp trải nghiệm mới, phù hợp, nhất quán và an toàn trên tất cả Sản phẩm của các công ty thuộc Mohi mà bạn sử dụng. Chúng tôi cũng xử lý thông tin về bạn trên các Công ty của Mohi cho các mục đích này, như được cho phép theo quy định của luật hiện hành cũng như theo các điều khoản và chính sách của những công ty đó. Ví dụ: chúng tôi xử lý thông tin nhận được từ WhatsApp về các tài khoản gửi spam trên dịch vụ của công ty này để có thể thực hiện hành động phù hợp đối với các tài khoản đó trên Mohi. Ngoài ra, chúng tôi còn tìm hiểu cách mọi người sử dụng và tương tác với Sản phẩm của các công ty thuộc Mohi, chẳng hạn như nắm được số người dùng trên các Sản phẩm khác nhau của các công ty thuộc Mohi.</span>
                                        </div>
                                    </Panel>
                                    <Panel header="5. Chúng tôi phản hồi các yêu cầu pháp lý hoặc ngăn chặn thiệt hại như thế nào?" key="5">
                                        <div className="footer-content">
                                            <span>- Theo yêu cầu pháp lý (như lệnh khám xét, lệnh tòa hoặc trát đòi hầu tòa) nếu chúng tôi thực sự tin rằng luật pháp yêu cầu chúng tôi làm như vậy. Việc này có thể bao gồm phản hồi các yêu cầu pháp lý từ những khu vực pháp lý bên ngoài Hoa Kỳ khi chúng tôi thực sự tin rằng phản hồi đó là bắt buộc theo luật pháp tại khu vực pháp lý đó, có ảnh hưởng đến người dùng tại khu vực pháp lý đó và phù hợp với các tiêu chuẩn được công nhận trên thế giới.</span>
                                            <span>- Khi chúng tôi thực sự tin rằng cần phải: phát hiện, ngăn chặn và xử lý hành vi gian lận, hành vi sử dụng trái phép Sản phẩm, hành vi vi phạm các điều khoản hoặc chính sách của chúng tôi hay hoạt động phi pháp hoặc có hại khác; để bảo vệ chính chúng tôi (gồm quyền, tài sản hoặc Sản phẩm của chúng tôi), bạn hoặc những người khác, kể cả trong quá trình điều tra hoặc thẩm vấn theo quy định; hoặc để ngăn ngừa khả năng tử vong hay thương tích sắp xảy ra. Ví dụ: nếu phù hợp, chúng tôi sẽ cung cấp và nhận thông tin từ các đối tác bên thứ ba về độ tin cậy của tài khoản của bạn nhằm ngăn chặn hành vi gian lận, lạm dụng và hoạt động có hại khác cả trong lẫn ngoài Sản phẩm của chúng tôi.</span>
                                        </div>
                                    </Panel>
                                </Collapse>
                            </TabPane>
                            <TabPane tab="Tiêu chuẩn cộng đồng" key="3">
                                <Collapse className="rules-collapse" defaultActiveKey={['0']} >
                                    <Panel header="1. Bạo lực và hành vi phạm tội" key="1">
                                        <div className="footer-content">
                                            <span>- Bạo lực và khích nộ</span>
                                            <span>- Cá nhân và tổ chức nguy hiểm</span>
                                            <span>- Cấu kết gây hại và cổ xúy tội ác</span>
                                            <span>- Hàng hóa thuộc diện kiểm soát</span>
                                            <span>- Gian lận và lừa đảo</span>
                                        </div>
                                    </Panel>
                                    <Panel header="2. An toàn" key="2">
                                        <div className="footer-content">
                                            <span>- Tự tử và tự gây thương tích.</span>
                                            <span>- Bóc lột tình dục, lạm dụng trẻ em và ảnh khỏa thân của trẻ em</span>
                                            <span>- Bóc lột tình dục người lớn</span>
                                            <span>- Bắt nạt và quấy rối</span>
                                            <span>- Bóc lột con người</span>
                                            <span>- Vi phạm quyền riêng tư và quyền riêng tư về hình ảnh</span>
                                        </div>
                                    </Panel>
                                    <Panel header="3. Nội dung phản cảm" key="3">
                                        <div className="footer-content">
                                            <span>- Ngôn từ gây thù ghét</span>
                                            <span>- Nội dung phản cảm và bạo lực</span>
                                            <span>- Ảnh khỏa thân người lớn và hoạt động tình dục</span>
                                            <span>- Gạ gẫm tình dục</span>
                                            <span>- Độc ác và thiếu tế nhị</span>
                                        </div>
                                    </Panel>
                                    <Panel header="4. Tính toàn vẹn và tính xác thực" key="4">
                                        <div className="footer-content">
                                            <span>- Thông tin sai lệch</span>
                                            <span>- Spam</span>
                                            <span>- An ninh mạng</span>
                                            <span>- Hành vi gian dối</span>
                                            <span>- Tin giả</span>
                                            <span>- Thap túng truyền thông</span>
                                            <span>- Tương nhớ</span>
                                        </div>
                                    </Panel>
                                    <Panel header="5. Tôn trọng quyền sở hữu trí tuệ" key="5">
                                        <div className="footer-content">
                                            <span>- Mohi rất xem trọng quyền sở hữu trí tuệ và tin tưởng rằng các quyền này là yếu tố quan trọng thúc đẩy sự biểu đạt, sáng tạo và đổi mới trong cộng đồng của chúng tôi. Bạn sở hữu tất cả nội dung và thông tin mình đăng lên Mohi và bạn kiểm soát cách chia sẻ các thông tin đó thông qua cài đặt quyền riêng tư và ứng dụng của mình. Tuy nhiên, trước khi chia sẻ nội dung trên Mohi, hãy đảm bảo bạn có quyền làm điều đó. Chúng tôi yêu cầu bạn tôn trọng bản quyền, nhãn hiệu hàng hóa và các quyền hợp pháp khác của người khác. Chúng tôi cam kết giúp mọi người và các tổ chức thúc đẩy và bảo vệ quyền sở hữu trí tuệ của họ.</span>
                                        </div>
                                    </Panel>
                                </Collapse>
                            </TabPane>

                        </Tabs>
                    </div>
                </div>
            </>
        )
    }

    return (
        <Switch>
            <Route component={Rules} />
        </Switch>
    )



}

export default Rules;
