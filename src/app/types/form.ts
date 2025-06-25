export interface EstimateFormData {
  // 見積もりタイプ
  estimateType: 'rough' | 'phone' | 'visit'
  
  // お客様情報
  customerInfo: {
    name: string
    furigana: string
    email: string
    phone: string
  }
  
  // 現住所
  currentAddress: {
    postalCode: string
    address: string
    buildingType: 'mansion' | 'apartment' | 'house' | 'other'
    layout: '1K' | '1DK' | '2DK' | '2LDK' | '3K' | 'other'
    elevator: 'yes' | 'no'
    roadWidth: '2m' | '4m' | '6m'
  }
  
  // 引越し先住所
  newAddress: {
    postalCode: string
    address: string
    buildingType: 'mansion' | 'apartment' | 'house' | 'other'
    layout: '1K' | '1DK' | '2DK' | '2LDK' | '3K' | 'other'
    elevator: 'yes' | 'no'
    roadWidth: '2m' | '4m' | '6m'
  }
  
  // 引越し希望日
  movingDates: {
    firstChoice: string
    secondChoice: string
    thirdChoice: string
  }
  
  // お荷物リスト
  luggage: {
    largeItems: string[]
    smallItems: string
  }
  
  // 引越人数
  peopleCount: string
  
  // メッセージ
  message: string
}