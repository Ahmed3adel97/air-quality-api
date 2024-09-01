import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class AirQuality extends Document {
  @Prop({ required: true })
  aqius: number;

  @Prop({ required: true })
  mainus: string;

  @Prop({ required: true })
  aqicn: number;

  @Prop({ required: true })
  maincn: string;
  @Prop({ required: true })
  ts: Date;
}

export const AirQualitySchema = SchemaFactory.createForClass(AirQuality);
