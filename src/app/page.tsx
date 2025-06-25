'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { FormSection } from './components/FormSection'
import { InputField } from './components/InputField'
import { SelectField } from './components/SelectField'
import { CheckboxGroup } from './components/CheckboxGroup'

const estimateTypeOptions = [
  { value: 'rough', label: '大まかな引越費用を知りたい' },
  { value: 'phone', label: '電話での見積もりをしたい' },
  { value: 'visit', label: '訪問での見積もりをしたい' },
]

const buildingTypeOptions = [
  { value: 'mansion', label: 'マンション' },
  { value: 'apartment', label: 'アパート' },
  { value: 'house', label: '一戸建' },
  { value: 'other', label: 'その他' },
]

const layoutOptions = [
  { value: '1K', label: '1K以下' },
  { value: '1DK', label: '1DK' },
  { value: '2DK', label: '2DK' },
  { value: '2LDK', label: '2LDK' },
  { value: '3K', label: '3K以上' },
  { value: 'other', label: 'その他' },
]

const elevatorOptions = [
  { value: 'yes', label: '有' },
  { value: 'no', label: '無' },
]

const roadWidthOptions = [
  { value: '2m', label: '2m' },
  { value: '4m', label: '4m' },
  { value: '6m', label: '6m以上' },
]

const largeItemsOptions = [
  { value: 'fridge_large', label: '冷蔵庫(大)' },
  { value: 'fridge_small', label: '冷蔵庫(小)' },
  { value: 'tv', label: 'テレビ' },
  { value: 'desk', label: 'デスク' },
  { value: 'table', label: 'テーブル' },
  { value: 'bookshelf', label: '本棚' },
  { value: 'sofa', label: 'ソファ' },
  { value: 'bed', label: 'ベッド' },
]

const smallItemsOptions = [
  { value: '5_or_less', label: 'ダンボール5個以下' },
  { value: '10_or_less', label: 'ダンボール10個以下' },
  { value: '20_or_less', label: 'ダンボール20個以下' },
  { value: '21_or_more', label: 'ダンボール21個以上' },
]

const peopleCountOptions = [
  { value: '1', label: '1人' },
  { value: '2', label: '2人' },
  { value: '3', label: '3人' },
  { value: '4', label: '4人' },
  { value: '5', label: '5人以上' },
]

export default function EstimateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<any>()

  const onSubmit = async (data: any) => {
    try {
      console.log('見積もりデータ:', data)
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert('見積もり依頼を受け付けました。担当者からご連絡いたします。')
      reset()
    } catch (error) {
      console.error('送信エラー:', error)
      alert('送信中にエラーが発生しました。もう一度お試しください。')
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">お見積り</h1>
        <p className="text-gray-600">引っ越しの見積もりをオンラインで簡単に</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* 見積もりタイプ */}
        <FormSection title="お見積もりについて">
          <div className="space-y-3">
            {estimateTypeOptions.map((option) => (
              <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  value={option.value}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  {...register('estimateType', { required: '見積もりタイプを選択してください' })}
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
            {errors.estimateType && (
              <p className="form-error">{errors.estimateType.message}</p>
            )}
          </div>
        </FormSection>

        {/* お客様情報 */}
        <FormSection title="お客様情報">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="お名前"
              name="customerInfo.name"
              register={register}
              error={errors.customerInfo?.name}
              required
              placeholder="山田 太郎"
            />
            <InputField
              label="フリガナ"
              name="customerInfo.furigana"
              register={register}
              error={errors.customerInfo?.furigana}
              placeholder="ヤマダ タロウ"
            />
            <InputField
              label="メールアドレス"
              name="customerInfo.email"
              register={register}
              error={errors.customerInfo?.email}
              required
              type="email"
              placeholder="example@email.com"
            />
            <InputField
              label="電話番号"
              name="customerInfo.phone"
              register={register}
              error={errors.customerInfo?.phone}
              required
              type="tel"
              placeholder="090-1234-5678"
            />
          </div>
        </FormSection>

        {/* 現住所 */}
        <FormSection title="現住所">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="郵便番号"
              name="currentAddress.postalCode"
              register={register}
              error={errors.currentAddress?.postalCode}
              required
              placeholder="123-4567"
            />
            <div className="md:col-span-2">
              <InputField
                label="ご住所"
                name="currentAddress.address"
                register={register}
                error={errors.currentAddress?.address}
                required
                placeholder="東京都渋谷区..."
              />
            </div>
            <SelectField
              label="建物種別"
              name="currentAddress.buildingType"
              register={register}
              error={errors.currentAddress?.buildingType}
              options={buildingTypeOptions}
            />
            <SelectField
              label="間取り"
              name="currentAddress.layout"
              register={register}
              error={errors.currentAddress?.layout}
              options={layoutOptions}
            />
            <SelectField
              label="エレベーター"
              name="currentAddress.elevator"
              register={register}
              error={errors.currentAddress?.elevator}
              options={elevatorOptions}
            />
            <SelectField
              label="道幅"
              name="currentAddress.roadWidth"
              register={register}
              error={errors.currentAddress?.roadWidth}
              options={roadWidthOptions}
            />
          </div>
        </FormSection>

        {/* 引越し先住所 */}
        <FormSection title="引越し先住所">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="郵便番号"
              name="newAddress.postalCode"
              register={register}
              error={errors.newAddress?.postalCode}
              placeholder="123-4567"
            />
            <div className="md:col-span-2">
              <InputField
                label="ご住所"
                name="newAddress.address"
                register={register}
                error={errors.newAddress?.address}
                required
                placeholder="大阪府大阪市..."
              />
            </div>
            <SelectField
              label="建物種別"
              name="newAddress.buildingType"
              register={register}
              error={errors.newAddress?.buildingType}
              options={buildingTypeOptions}
            />
            <SelectField
              label="間取り"
              name="newAddress.layout"
              register={register}
              error={errors.newAddress?.layout}
              options={layoutOptions}
            />
            <SelectField
              label="エレベーター"
              name="newAddress.elevator"
              register={register}
              error={errors.newAddress?.elevator}
              options={elevatorOptions}
            />
            <SelectField
              label="道幅"
              name="newAddress.roadWidth"
              register={register}
              error={errors.newAddress?.roadWidth}
              options={roadWidthOptions}
            />
          </div>
        </FormSection>

        {/* 引越し希望日 */}
        <FormSection title="引越し希望日">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField
              label="第１希望"
              name="movingDates.firstChoice"
              register={register}
              error={errors.movingDates?.firstChoice}
              type="date"
            />
            <InputField
              label="第２希望"
              name="movingDates.secondChoice"
              register={register}
              error={errors.movingDates?.secondChoice}
              type="date"
            />
            <InputField
              label="第３希望"
              name="movingDates.thirdChoice"
              register={register}
              error={errors.movingDates?.thirdChoice}
              type="date"
            />
          </div>
        </FormSection>

        {/* お荷物リスト */}
        <FormSection title="お荷物リスト">
          <CheckboxGroup
            label="大型のお荷物"
            name="luggage.largeItems"
            register={register}
            options={largeItemsOptions}
          />
          
          <div className="mt-6">
            <label className="form-label">小型のお荷物</label>
            <div className="space-y-2">
              {smallItemsOptions.map((option) => (
                <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    value={option.value}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    {...register('luggage.smallItems')}
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </FormSection>

        {/* 引越人数 */}
        <FormSection title="引越人数">
          <SelectField
            label="引越人数"
            name="peopleCount"
            register={register}
            error={errors.peopleCount}
            required
            options={peopleCountOptions}
            placeholder="人数を選択してください"
          />
        </FormSection>

        {/* メッセージ */}
        <FormSection title="弊社へのメッセージ">
          <div className="mb-4">
            <label className="form-label">ご質問・ご要望など</label>
            <textarea
              rows={4}
              className="form-input resize-none"
              placeholder="その他ご要望がございましたらお書きください"
              {...register('message')}
            />
          </div>
        </FormSection>

        {/* 送信ボタン */}
        <div className="flex justify-center pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 rounded-md font-medium text-white transition-colors ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
            }`}
          >
            {isSubmitting ? '送信中...' : '見積もりを依頼する'}
          </button>
        </div>
      </form>
    </div>
  )
}