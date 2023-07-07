import { Box,
    Container,
    Heading,
    Text,
    SimpleGrid
   } from '@chakra-ui/react'

function awards() {
    return (
        <>
            <Container maxW='800px' pt={10} marginBottom="16">
                <SimpleGrid columns={[1,1,2]} spacing={10}>
                    <Box>
                        <Heading size={'md'}>2014年12月</Heading>
                        <Text>第3回高校・高専「気象観測機器コンテスト」優秀賞</Text>
                        <Text><b>受賞作品</b> : 2014 Examine Project | Cloud Examine</Text>
                        <Heading size={'md'} pt={10}>2015年2月</Heading>
                        <Text>平成26年度 学生表彰 功労賞(団体)</Text>
                        <Heading size={'md'} pt={10}>2016年11月</Heading>
                        <Text>第5回高校・高専「気象観測機器コンテスト」優秀賞</Text>
                        <Text><b>受賞作品</b> : 2016 Examine Project | Stratosphere Examine Satellite(成層圏観測衛星)「SES」</Text>
                        <Heading size={'md'} pt={10}>2017年2月</Heading>
                        <Text>平成28年度 学生表彰 功労賞(団体)</Text>
                        <Heading size={'md'} pt={10}>2017年11月</Heading>
                        <Text>第6回高校・高専「気象観測機器コンテスト」優秀賞</Text>
                        <Text><b>受賞作品</b> : 2017 Examine Project | 大気汚染物質観測衛星「PENTA」</Text>
                        <Heading size={'md'} pt={10}>2018年2月</Heading>
                        <Text>平成29年度 学生表彰 功労賞(団体)</Text>
                        <Heading size={'md'} pt={10}>2018年10月</Heading>
                        <Text>第29回全国高等専門学校プログラミングコンテスト 自由部門 優秀賞</Text>
                        <Text>NAPROCK 10th International Programming Contest In The Original Section SECOND PRISE</Text>
                        <Text><b>受賞作品</b> : ぷらねっと -ARを用いた植物栽培教育支援システム-</Text>
                    </Box>
                    <Box>
                        <Heading size={'md'}>2018年11月</Heading>
                        <Text>第7回高校・高専「気象観測機器コンテスト」最優秀賞</Text>
                        <Text><b>受賞作品</b> : 多地点同時・多種気象データ観測機器「P=System」</Text>
                        <Heading size={'md'} pt={10}>2019年2月</Heading>
                        <Text>平成30年度 学生表彰 校長賞</Text>
                        <Text>平成30年度 学生表彰 功労賞(個人)</Text>
                        <Text>平成30年度 学生表彰 功労賞(団体:気象観測機器コンテスト)</Text>
                        <Text>平成30年度 学生表彰 功労賞(団体:プログラミングコンテスト)</Text>
                        <Heading size={'md'} pt={10}>2021年6月</Heading>
                        <Text>社長表彰 佳作</Text>
                        <Text>SkyWay+IoTでバーチャル検証空間を実現 -リアルな検証を自宅でも可能に-</Text>
                        <Heading size={'md'} pt={10}>2021年12月</Heading>
                        <Text>DX Summit 2021 Award</Text>
                        <Text>SkyWay+IoTでバーチャル検証空間を実現 -リアルな検証を自宅でも可能に-</Text>
                        <Heading size={'md'} pt={10}>2022年12月</Heading>
                        <Text>DX Summit 2022 Award</Text>
                        <Text>Servo+IoTでバーチャル検証空間を拡大 -リアルから繋ぐ鍵Remote Key Puncher-</Text>
                        <Heading size={'md'} pt={10}>2023年06月</Heading>
                        <Text>社長表彰 佳作</Text>
                        <Text>SkyWay+IoTでバーチャル検証空間を実現 -リアルな検証を自宅でも可能に-</Text>
                    </Box>

                </SimpleGrid>
            </Container>
        </>
    )
}

export default awards