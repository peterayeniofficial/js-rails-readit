class Content < ApplicationRecord
    validates :url,  presence: true
    validates :description,  presence: true
    validates :image,  presence: true
    validates :title,  presence: true

    belongs_to :user
    has_many :comments
end