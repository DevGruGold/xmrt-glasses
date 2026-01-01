import React from 'react';
import { useTranslation } from 'react-i18next';
import { X, Plus, Minus, ShoppingCart, ExternalLink } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const Cart = () => {
  const { t } = useTranslation();
  const { items, removeItem, updateQuantity, totalItems, subtotal, discount, total, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative p-2 text-gray-700 hover:text-teal-600 transition-colors">
          <ShoppingCart className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-teal-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            {t('cart.title')}
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 flex flex-col h-[calc(100vh-180px)]">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
              <ShoppingCart className="w-16 h-16 mb-4 opacity-30" />
              <p>{t('cart.empty')}</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-teal-600 font-bold">
                          {formatPrice(item.price)}
                        </span>
                        {item.originalPrice > item.price && (
                          <span className="text-gray-400 line-through text-sm">
                            {formatPrice(item.originalPrice)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 h-fit text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mt-4 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>{t('cart.subtotal')}</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>{t('cart.discount')}</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>{t('cart.total')}</span>
                  <span>{formatPrice(total)}</span>
                </div>

                <a
                  href="https://www.kickstarter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 bg-[#05CE78] text-white py-3 rounded-lg font-semibold hover:bg-[#04b56a] transition-colors flex items-center justify-center gap-2"
                >
                  {t('cart.backOnKickstarter')}
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={clearCart}
                >
                  {t('cart.clearCart')}
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
